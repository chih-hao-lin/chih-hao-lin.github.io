import os 
import cv2 
try:
    # for backward compatibility
    import imageio.v2 as imageio
except ModuleNotFoundError:
    import imageio
from PIL import Image
from tqdm import tqdm
import numpy as np
import argparse

def extract_frames():
    parser = argparse.ArgumentParser()
    parser.add_argument('--video', help='path to video')
    parser.add_argument('--outdir', help='output folder')
    args = parser.parse_args()

    os.makedirs(args.outdir, exist_ok=True)
    vidcap = cv2.VideoCapture(args.video)
    i = 0
    while True:
        success, image = vidcap.read()
        if not success:
            break
        path = os.path.join(args.outdir, '{:0>5d}.png'.format(i))
        cv2.imwrite(path, image)
        i += 1

def read_video_frames(video_path):
    vidcap = cv2.VideoCapture(video_path)
    frames = []
    while True:
        success, image = vidcap.read()
        if not success:
            break
        else:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            frames.append(image)
    if len(frames) == 0:
        print('ERROR: {} does not exist'.format(video_path))
    return frames



def is_image_name(name):
    valid_names = ['.jpg', '.png', '.JPG', '.PNG']
    for v in valid_names:
        if name.endswith(v):
            return True
    return False

def generate_video():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dir')
    parser.add_argument('--out')
    parser.add_argument('--fps', type=int, default=30)
    args = parser.parse_args()

    imgs = sorted([os.path.join(args.dir, img) for img in os.listdir(args.dir) if is_image_name(img)])
    imgs = [np.array(Image.open(img)) for img in imgs]
    h, w = imgs[0].shape[:2]
    imgs = [img[:h-h%2,:w-w%2] for img in imgs]
    # imgs += imgs[::-1]
    imageio.mimsave(args.out, imgs, fps=args.fps, macro_block_size=1)

    # imgs = [Image.open(img) for img in imgs]
    # imgs += imgs[::-1]
    # imgs[0].save(args.out, format='GIF', append_images=imgs,
    #      save_all=True, duration=10, loop=0)

def add_text():
    parser = argparse.ArgumentParser()
    parser.add_argument('--video_in')
    parser.add_argument('--video_out')
    parser.add_argument('--text')
    parser.add_argument('--font_size', type=float, default=2.0)
    parser.add_argument('--font_thickness', type=int, default=4)
    parser.add_argument('--right', dest='right', action='store_true')
    parser.add_argument('--bottom', dest='bottom', action='store_true')
    parser.add_argument('--fps', type=int, default=30)
    args = parser.parse_args()

    background_color = (0, 0, 0)  # black color in BGR format
    text = args.text
    font = cv2.FONT_HERSHEY_COMPLEX
    font_size = args.font_size
    font_color = (255, 255, 255)  # White color in BGR format
    thickness = args.font_thickness

    frames_in = read_video_frames(args.video_in)
    h, w, _ = frames_in[0].shape

    text_size = cv2.getTextSize(text, font, font_size, thickness)[0]
    border = 10 # to image 
    buffer = 30 # inside box
    x, y = border, border # Position of the text
    x2, y2 = x + text_size[0] + buffer, y + text_size[1] + buffer
    if args.right:
        x2 = w - border
        x  = x2 - text_size[0] - buffer
    if args.bottom:
        y2 = h - border
        y  = y2 - text_size[1] - buffer
    
    text_shift_x = 15/2 * args.font_size
    text_shift_y = 55/2 * args.font_size
    frames_out = []
    for frame in frames_in:
        cv2.rectangle(frame, (x, y), (x2, y2), background_color, -1)
        cv2.putText(frame, text, (int(x + text_shift_x), int(y + text_shift_y)), font, font_size, font_color, thickness)
        frames_out.append(frame)

    imageio.mimsave(args.video_out,
                    frames_out,
                    fps=args.fps, macro_block_size=1)

def get_images_from_dir(dir_path):
    imgs = sorted([os.path.join(dir_path, img) for img in os.listdir(dir_path) if is_image_name(img)])
    imgs = [np.array(Image.open(img)) for img in imgs]
    return imgs

def switch_video():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dir_ins', nargs='+')
    parser.add_argument('--dir_out')
    parser.add_argument('--mid', type=int)
    parser.add_argument('--slope', type=float, default=1.0)
    parser.add_argument('--window', type=int, default=30)
    parser.add_argument('--linewidth', type=int, default=0)
    parser.add_argument('--flip', dest='flip', action='store_true')
    parser.add_argument('--fps', type=int, default=30)
    args = parser.parse_args()

    dir_in_0, dir_in_1  = args.dir_ins
    
    frames_0 = get_images_from_dir(dir_in_0)
    frames_1 = get_images_from_dir(dir_in_1)
    h, w, _ = frames_0[0].shape
    
    v_start = 0 
    v_end   = (w-1) + (h-1) * args.slope
    v_slope = (v_end - v_start) / args.window
    if args.flip:
        v_slope *= -1
    v_const = (v_end+v_start)/2 - args.mid * v_slope

    grid_y, grid_x = np.meshgrid(np.arange(w), np.arange(h))
    grid_value = grid_y + grid_x * args.slope

    dir_out = args.dir_out
    os.makedirs(dir_out, exist_ok=True)
    frames_out = []
    vdo_len = len(frames_0)
    for i in tqdm(range(vdo_len)):
        v_threshold = i * v_slope + v_const
        mask_0 = grid_value > v_threshold + args.linewidth
        mask_1 = grid_value < v_threshold

        f_0 = frames_0[i]
        f_1 = frames_1[i]
        f_out = np.ones_like(f_0) * 255
        f_out[mask_0] = f_0[mask_0]
        f_out[mask_1] = f_1[mask_1]
        frames_out.append(f_out)

        img_out = Image.fromarray(f_out)
        img_path = os.path.join(dir_out, f'{i:0>5d}.png')
        img_out.save(img_path)
    
    frames_out = frames_out + frames_out[::-1]

    vid_path = os.path.join(dir_out, 'video.mp4')
    imageio.mimsave(vid_path, frames_out,
                    fps=args.fps, macro_block_size=1)

def merge_video():
    parser = argparse.ArgumentParser()
    parser.add_argument('--first')
    parser.add_argument('--second')
    parser.add_argument('--out')
    parser.add_argument('--axis', type=int, default=0)
    parser.add_argument('--fps', type=int, default=30)
    args = parser.parse_args()

    frames_first  = read_video_frames(args.first)
    frames_second = read_video_frames(args.second)
    frames_out   = []

    frame_len = min(len(frames_first), len(frames_second))
    for i in range(frame_len):
        left  = frames_first[i]
        right = frames_second[i]
        out = np.concatenate([left, right], axis=args.axis)
        frames_out.append(out)
    
    imageio.mimsave(args.out,
                    frames_out,
                    fps=args.fps, macro_block_size=1)
    print('Export video:', args.out)

def loop():
    parser = argparse.ArgumentParser()
    parser.add_argument('--video_in')
    parser.add_argument('--video_out')
    parser.add_argument('-fps', type=int, default=30)
    args = parser.parse_args()

    frames = read_video_frames(args.video_in)
    frames += frames[::-1]
    imageio.mimsave(args.video_out,
                    frames,
                    fps=args.fps, macro_block_size=1)


def create_autovfx_video():
    """
    Create a video from images:
    - First 30 frames: before.png (repeated)
    - Then: all images from assets/fire_ball/ directory
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('--before', default='images/2025/autovfx/before.png', help='path to before.png')
    parser.add_argument('--fire_ball_dir', default='images/2025/autovfx/assets/fire_ball', help='path to fire_ball directory')
    parser.add_argument('--out', default='images/2025/autovfx/teaser.mp4', help='output video path')
    parser.add_argument('--fps', type=int, default=30)
    parser.add_argument('--repeat_before', type=int, default=60, help='number of times to repeat before.png')
    args = parser.parse_args()

    # Load before.png and convert to RGB if needed
    before_pil = Image.open(args.before)
    if before_pil.mode != 'RGB':
        before_pil = before_pil.convert('RGB')
    
    h, w = np.array(before_pil).shape[:2]
    h, w = h // 4, w // 4
    h = h - h % 2
    w = w - w % 2
    print("h, w:", h, w)
    before_img = before_pil.resize((w, h))
    before_img = np.array(before_img)
    
    # Create list with 30 copies of before.png
    imgs = [before_img for _ in range(args.repeat_before)]
    
    # Get all images from fire_ball directory
    fire_ball_imgs = sorted([os.path.join(args.fire_ball_dir, img) 
                            for img in os.listdir(args.fire_ball_dir) 
                            if is_image_name(img)])
    
    # Append fire_ball images, resizing to match before.png dimensions and format
    for img_path in fire_ball_imgs:
        img = Image.open(img_path)
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        # Use LANCZOS resampling (or Image.LANCZOS for older PIL versions)
        try:
            img = img.resize((w, h), Image.Resampling.LANCZOS)
        except AttributeError:
            img = img.resize((w, h), Image.LANCZOS)
        img = np.array(img)
        imgs.append(img)
    
    # Export video
    imageio.mimsave(args.out, imgs, fps=args.fps, macro_block_size=1)
    print(f'Video exported: {args.out}')
    print(f'Total frames: {len(imgs)} ({args.repeat_before} before + {len(fire_ball_imgs)} fire_ball)')

def create_transition_video():
    """
    Create a video with linear interpolation:
    - First 30 frames: before.png (repeated)
    - Next 30 frames: linear interpolation from before.png to after.png
    - Next 30 frames: after.png (repeated)
    - Next 30 frames: linear interpolation from after.png to before.png
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('--before', default='images/2021/gcn3d_pami/before.png', help='path to before.png')
    parser.add_argument('--after', default='images/2021/gcn3d_pami/after.png', help='path to after.png')
    parser.add_argument('--out', default='images/2021/gcn3d_pami/teaser.mp4', help='output video path')
    parser.add_argument('--fps', type=int, default=30)
    parser.add_argument('--frames_per_section', type=int, default=30, help='number of frames per section')
    args = parser.parse_args()

    # Load before.png and convert to RGB if needed
    before_pil = Image.open(args.before)
    if before_pil.mode != 'RGB':
        before_pil = before_pil.convert('RGB')

    # Resize before_pil if width > 800 pixels
    before_width, before_height = before_pil.size
    if before_width > 800:
        new_height = int(before_height * (800 / before_width))
        try:
            before_pil = before_pil.resize((800, new_height), Image.Resampling.LANCZOS)
        except AttributeError:
            before_pil = before_pil.resize((800, new_height), Image.LANCZOS)

    before_img = np.array(before_pil).astype(np.float32)

    # Load after.png and convert to RGB if needed
    after_pil = Image.open(args.after)
    if after_pil.mode != 'RGB':
        after_pil = after_pil.convert('RGB')

    # Resize after_pil such that width cannot exceed 800 pixels
    after_width, after_height = after_pil.size
    if after_width > 800:
        new_height = int(after_height * (800 / after_width))
        try:
            after_pil = after_pil.resize((800, new_height), Image.Resampling.LANCZOS)
        except AttributeError:
            after_pil = after_pil.resize((800, new_height), Image.LANCZOS)

    # Ensure same dimensions (resize after_pil to match before_pil)
    if before_pil.size != after_pil.size:
        try:
            after_pil = after_pil.resize(before_pil.size, Image.Resampling.LANCZOS)
        except AttributeError:
            after_pil = after_pil.resize(before_pil.size, Image.LANCZOS)
    after_img = np.array(after_pil).astype(np.float32)
    # Ensure dimensions are even (required for video encoding)
    h, w = before_img.shape[:2]
    h = h - h % 2
    w = w - w % 2
    before_img = before_img[:h, :w]
    after_img = after_img[:h, :w]
    
    # Convert to uint8 for final output
    before_img_uint8 = before_img.astype(np.uint8)
    after_img_uint8 = after_img.astype(np.uint8)
    
    imgs = []
    
    # Section 1: 30 frames of before.png
    for _ in range(args.frames_per_section * 2):
        imgs.append(before_img_uint8.copy())
    
    # Section 2: 30 frames linear interpolation from before to after
    # alpha goes from 0 to 1: result = (1 - alpha) * before + alpha * after
    for i in range(args.frames_per_section):
        alpha = i / (args.frames_per_section - 1)  # 0 to 1
        interpolated = (1 - alpha) * before_img + alpha * after_img
        imgs.append(interpolated.astype(np.uint8))
    
    # Section 3: 30 frames of after.png
    for _ in range(args.frames_per_section * 2):
        imgs.append(after_img_uint8.copy())
    
    # Section 4: 30 frames linear interpolation from after to before
    # alpha goes from 0 to 1: result = (1 - alpha) * after + alpha * before
    for i in range(args.frames_per_section):
        alpha = i / (args.frames_per_section - 1)  # 0 to 1
        interpolated = (1 - alpha) * after_img + alpha * before_img
        imgs.append(interpolated.astype(np.uint8))
    
    # Export video
    imageio.mimsave(args.out, imgs, fps=args.fps, macro_block_size=1)
    print(f'Video exported: {args.out}')
    print(f'Total frames: {len(imgs)} (4 sections of {args.frames_per_section} frames each)')

if __name__ == '__main__':
    # extract_frames()
    # generate_video()
    # merge_video()
    # add_text()
    # switch_video()
    # loop()
    # create_autovfx_video()
    create_transition_video()
