import './FooterLinks.css'

function FooterLinks({links}) {
  return (
    <ul className="footer-ul">
      {
        links.map((link) => {
          return (
            <li key={link.label}><a href={link.href}> {link.label} </a>  </li>
          )
        })
      }
    </ul>
  )
}

export default FooterLinks