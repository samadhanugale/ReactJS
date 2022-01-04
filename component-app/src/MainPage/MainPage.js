import './MainPage.css'
export function MainPage() {
    const name = " Break the Wall";
    const fname = "Lana";
    const lname = "James";
    const path = "https://picsum.photos/id/37/200";
    const p = "https://picsum.photos/id/37";
    const height = 400;
    const width = 400;

    let MyStyle = { color: 'maroon', padding: '5px', margin: '10px' }
    return (
        <section>
            <h2 style={MyStyle}>Note is :  {name}</h2>
            <h1 style={{ 'backgroundColor': 'yellow' }}>{`Owner : ${fname} ${lname}`}</h1>
            <img src={path} alt=""></img>
            <h2 contentEditable="true"> Hello there</h2>
            <img src={`${p}/${width}/${height}`} alt=""></img>

        </section>
    );

}