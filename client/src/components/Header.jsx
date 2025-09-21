function Header(){

 return (
    <header className="flex justify-between items-center" >
      
      <section>
        <div className="flex items-center gap-4">
          {/* YouTube */}
      <a href="https://www.youtube.com/@caiquepetris" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
  <svg className="w-6 h-6 transition" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#FF0000"/>
    <path d="M16.5 12L10.5 15.5981V8.40192L16.5 12Z" fill="white"/>
  </svg>
</a>

          {/* Substack */}
        <a href="https://caiquepetris.substack.com/" target="_blank" rel="noopener noreferrer" aria-label="Substack">
  <svg className="w-6 h-6 text-orange-500 hover:text-orange-600 transition" fill="none" viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="currentColor"/>
    <rect x="10" y="12" width="20" height="4" fill="#fff"/>
    <rect x="10" y="18" width="20" height="10" fill="#fff"/>
  </svg>
</a>

          {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/cpetris/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <svg className="w-6 h-6 text-blue-700 hover:text-blue-900 transition" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20.5h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.73 0-.95.78-1.73 1.75-1.73s1.75.78 1.75 1.73c0 .95-.78 1.73-1.75 1.73zm15.25 12.27h-3v-5.69c0-1.36-.03-3.11-1.89-3.11-1.89 0-2.18 1.48-2.18 3.01v5.79h-3v-11h2.89v1.5h.04c.4-.75 1.37-1.54 2.83-1.54 3.02 0 3.58 1.99 3.58 4.58v6.46z"/>
  </svg>
</a>

        </div>
      </section>
    </header>
  );
}

export default Header