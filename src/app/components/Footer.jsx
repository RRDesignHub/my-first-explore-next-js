
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Privacy</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
