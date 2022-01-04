import './Footer.css'
export function Footer() {
    let comp = "Neosoft Tech";

    return (
        <section className='Footer'>
          <div class="footer_container">
    <div class="container">
        <strong>Title</strong>
        <ul>
            <li>Adresse</li>
            <li>Tlf: Phone</li>
            <li>Zipcode/City</li>
            <li>Mail: Email</li>
        </ul>
    </div>
    <div class="container">
        <strong>Links</strong>
        <ul>
            <li>Om skolen</li>
            <li>Elever</li>
            <li>Kalender</li>
            <li>Galleri</li>
            <li>For&aelig;ldre</li>
            <li>Fag</li>
        </ul>
    </div>
    <div class="container">
        Your FB/Twitter things
    </div>
</div>

        </section>
    );
}