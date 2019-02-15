import React from 'react';

const WeatherForm = props=>(
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input className="form-control" autoFocus type="text" name="city" placeholder="Your city name" />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="country" placeholder="Your country name" />
            </div>
            <button className="btn btn-success btn-block">Get Weather</button>
        </form>
    </div>
);
export default WeatherForm;