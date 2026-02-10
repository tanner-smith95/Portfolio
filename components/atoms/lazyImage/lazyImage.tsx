import Image from 'next/image';

const LazyImage = ({ src, alt, disableLazy }: { src: string; alt?: string; disableLazy?: boolean }) => {
  return (
    <Image
      src={src}
      fill={true}
      style={{ objectFit: "cover" }}
      alt={alt || ""}
      loading={disableLazy ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={src}
    />
  );
};

export default LazyImage;