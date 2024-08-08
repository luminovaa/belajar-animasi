const Footer = () => {
  return (
    <div className="fixed bottom-0 opacity-75 left-0 w-full flex justify-center text-white items-center text-center py-1">
      <p className="text-xs">
        Hikarunara From{" "}
        <span className="font-bold underline">
          <a href="https://www.kimiuso.jp/">Your Lie In April</a>
        </span>{" "}
        by <a href="http://">Goose House.</a> <br />
        Copyright &copy; {new Date().getFullYear()} Luminova. Website Licensed
        Under GNU GPLv3.{" "}
      </p>
    </div>
  );
};

export default Footer;
