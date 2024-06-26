"use client";
import ReactPlayer from "react-player";

export default function VideoBlock({
  url,
}: {
  url: string;
  captions?: string[];
}) {
  return (
    <ReactPlayer
      width={"100%"}
      url={url}
      controls
      style={{ marginBottom: "0.5rem", marginTop: "0.5rem" }}
    />
  );
}
