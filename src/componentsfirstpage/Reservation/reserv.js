import "./reserv.css";

export default function Reservation() {
  return (
    <div className="container_reservbg">
      <div className="container_reserv">
        <div className="text_reserv">
          <h5 className="www">New!</h5>
          <div className="make">
            <h1>Make a Reservation</h1>
            <p>✘✘✘</p>
          </div>
          <div className="input_reserv">
            <input
              className="ContactInput"
              type="time"
              name="Email"
              placeholder="Введите ваше время"
            />
            <input
              className="ContactInput"
              type="date"
              name="Email"
              placeholder="Введите дату"
            />
            <input
              className="ContactInput"
              type="tel"
              name="Email"
              placeholder="Введите ваш номер"
            />
            <input
              className="ContactInput"
              type="Email"
              name="Email"
              placeholder="Введите ваш Email"
            />
          </div>
        </div>
      </div>
      <div className="button_reserv">
          <button type="submit">Отправит</button>
      </div>
    </div>
  );
}
