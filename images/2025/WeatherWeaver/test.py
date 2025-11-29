import os
import cv2
import numpy as np
from PIL import Image
try:
    # for backward compatibility
    import imageio.v2 as imageio
except ModuleNotFoundError:
    import imageio

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

video_path  = "images/2025/WeatherWeaver/after_hd.mp4"
output_path = "images/2025/WeatherWeaver/after.mp4"

# Open video
cap = cv2.VideoCapture(video_path)

# Get video properties
fps = int(cap.get(cv2.CAP_PROP_FPS))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Calculate new dimensions (1/4 resolution)
new_width = width // 4
new_height = height // 4

frames = read_video_frames(video_path)
print(len(frames))
frames = [cv2.resize(frame, (new_width, new_height), interpolation=cv2.INTER_AREA) for frame in frames]
print(len(frames))
imageio.mimsave(output_path, frames, fps=fps)

print(f"Video saved to: {output_path}")
