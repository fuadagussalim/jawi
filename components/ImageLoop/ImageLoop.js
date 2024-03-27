import Image from 'next/image';
import glob from 'glob';

const Images = ({ folder }) => {
  const imageDirectory = `./public/${folder}`;
  const imageFilenames = glob.sync(`${imageDirectory}/*.{jpg,jpeg,png,gif}`);

  return (
    <div>
      {imageFilenames.map((filename, index) => (
        <Image
          key={index}
          src={filename}
          alt={`Image ${index}`}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

export default Images;