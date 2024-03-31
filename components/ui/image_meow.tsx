import Image from 'next/image'; // This import statement is necessary

function MyComponent() {
  return (
    <div>
      <Image
        src="/images/meow.jpg" // The path should be relative to the `public` directory
        alt="Description of Image"
        width={500} // Desired width of the image (in pixels)
        height={300} // Desired height of the image (in pixels)
      />
    </div>
  );
}
