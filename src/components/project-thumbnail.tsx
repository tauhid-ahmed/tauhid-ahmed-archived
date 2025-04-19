"use client";
import { motion } from "motion/react";
import Image from "next/image";

export function ProjectThumbnail({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  return (
    <div className="space-y-2 aspect-video md:max-h-84 relative overflow-hidden">
      {[...images, images[0]].map((image, index) => (
        <motion.div
          className="size-full absolute"
          key={index}
          style={{
            top: `${index * 100}%`,
          }}
          animate={{
            y: `${images.length * -100}%`,
          }}
          transition={{
            duration: 3 * images.length,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            height={300}
            width={300}
            src={image}
            alt={alt}
            className="size-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
