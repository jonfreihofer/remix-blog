import { Outlet, LiveReload, Link } from 'remix';

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet /> 
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang='en'>
    <head>
      <title>Cool Blog</title>
      <body>
       {children}
        { process.env.NODE_ENV === 'development' ? <LiveReload /> : null }
      </body>
    </head>
  </html>
  )
}

function Layout({ children }) {
  return (
    <>
    <nav className="navbar">
      <Link to="/" className="logo" >
        Remix
      </Link>
    </nav>

    <ul className="nav">
      <li>
        <Link to="/posts">Post</Link>
      </li>
    </ul>
    <div className="container">
      {children}
      </div>
    </>

  )
}