import classNames from "classnames"

export function MyVideo({sources, width="320", height="240", classNames} ) {
  return (
    <video className={`${classNames} width={width} height={height} controls preload="none"`}>
      <source src="/path/to/video.mp4" type="video/mp4" />
      <track
        src={sources}
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}