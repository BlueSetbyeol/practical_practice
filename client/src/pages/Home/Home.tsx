import "./Home.css";

export default function Home() {
  return (
    <section className="hereWeGo">
      <article className="welcome">
        <h1>Welcome into a world of explorations !</h1>
        <p>
          Where anything is possible and most of all, anything is tried to
          understand.
        </p>
      </article>
      <aside className="inspriation">
        <h2>Anyplace you wanna visit today ?</h2>
        <p>If you allow me to be a bit presumptive, here is where you begin.</p>
        <form action="" className="whereTo">
          <label htmlFor="">Please give us a destination or an adress :</label>
          <div>
            <input type="text" className="destination" />
            <input type="submit" value="Get Traveling" id="button_at_home" />
          </div>
        </form>
      </aside>
    </section>
  );
}
