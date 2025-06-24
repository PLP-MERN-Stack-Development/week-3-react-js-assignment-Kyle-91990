function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Task Manager. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Privacy</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
