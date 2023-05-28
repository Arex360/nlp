import cv2
import imageio
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import argparse

def add_text_to_frame(frame, attacker, victim):
    frame_pil = Image.fromarray(frame)
    draw = ImageDraw.Draw(frame_pil)
    font = ImageFont.load_default()
    font_color = (255, 0, 0)
    text_position = (30, 30)
    victim_position = (150, 60)
    draw.text(text_position, attacker, font=font, fill=font_color)
    draw.text(victim_position, victim, font=font, fill=font_color)
    frame_with_text = np.array(frame_pil)
    return frame_with_text

def main(gif_path, output_path, attacker, victim):
    gif = cv2.VideoCapture(gif_path)
    frames = []
    while True:
        ret, frame = gif.read()
        if not ret:
            break
        frame_with_text = add_text_to_frame(frame, attacker, victim)
        frames.append(frame_with_text)
    imageio.mimsave(output_path, frames, 'GIF', duration=0.1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--gif_path', help='Path to the input GIF file')
    parser.add_argument('--output_path', help='Path to save the output GIF file')
    parser.add_argument('--attacker', help='Attacker name')
    parser.add_argument('--victim', help='Victim name')
    args = parser.parse_args()
    main(args.gif_path, args.output_path, args.attacker, args.victim)
