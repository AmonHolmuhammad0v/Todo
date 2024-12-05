// function Header(props) {
function Header({logoText='React', links, send}) {
    // let x 
    // const {name} = {name: 'audi', year: 2020};
    // console.log(name);
    // name = 120
    // console.log(name);
    // let logoText = props.logoText;
    // console.log(logoText);
    // let { logoText } = props
    console.log(links);
    return (
        <header className="header">
            <a href="" className="logo">{logoText}</a
            <ul className="menu">
                {links.map((elem)=>{
                    return <li key={elem}>
                        <a href="" onClick={(e)=>{
                            e.preventDefault()
                            send(elem)
                        }}>
                            {elem}
                        </a>
                    </li>
                })}
                
            </ul>
        </header>
    )
}

export default Header
