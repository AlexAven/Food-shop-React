function Footer() {
    return <footer className='page-footer blue-grey darken-3 lighten-4'>
      <div className='footer-copyright'>
        <div className='container'>
        © {new Date().getFullYear()} All rights reserved
        <a className='grey-text text-lighten-4 right' href='https://github.com/AlexAven/' target='_blank' rel='noreferrer'>My Repository</a>
        </div>
      </div>
    </footer>
};

export {Footer};