import React from "react";

class NewFlight extends React.Component {
  render() {
    const { flights } = this.props;

    return (
      <div>
        <h1>Create New Flight</h1>
        <form action="/flights" method="POST">
          <label>
            Airline:
            <select
              name="airline"
              value={this.state.airline}
              onChange={this.handleChange}
            >
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
          </label>
          <label>
            Flight Number:
            <input
              type="number"
              name="flightNo"
              min="10"
              max="9999"
              value={this.state.flightNo}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Departure Date:
            <input
              type="datetime-local"
              name="departs"
              value={this.state.departs}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Create Flight</button>
        </form>
      </div>
    );
  }
}

export default NewFlight;
