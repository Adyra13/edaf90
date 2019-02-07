import React from "react";
import Salad from "./Salad";

class ComposeSalad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundation: "",
      proteins: [],
      extras: [],
      dressing: "",
      salad: new Salad()
    };
    this.handleFoundationChange = this.handleFoundationChange.bind(this);
    this.handleProteinChange = this.handleProteinChange.bind(this);
    this.handleExtraChange = this.handleExtraChange.bind(this);
    this.handleDressingChange = this.handleDressingChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    alert(
      "Join the dark side, we have " +
        this.state.foundation +
        " with " +
        this.state.dressing +
        " and " +
        this.state.proteins +
        " and some " +
        this.state.extras
    );

    this.state.salad.addF(this.state.foundation);
    this.state.proteins.map(p => this.state.salad.addP(p));
    this.state.extras.map(e => this.state.salad.addE(e));
    this.state.salad.addD(this.state.dressing);
    this.state.salad.print();
    //TODO: Send away the salad to the carty
    this.props.handleNewSalad(this.state.salad);

    this.setState({
      foundation: "",
      proteins: [],
      extras: [],
      dressing: "",
      salad: new Salad()
    });
    event.preventDefault();
  }

  handleFoundationChange(event) {
    this.setState({ foundation: event.target.value });
  }

  handleProteinChange(event) {
    if (event.target.checked) {
      this.setState({ proteins: [...this.state.proteins, event.target.value] });
    } else {
      var index = this.state.proteins.indexOf(event.target.value);
      this.setState(this.state.proteins.splice(index, 1));
    }
  }

  handleExtraChange(event) {
    if (event.target.checked) {
      this.setState({ extras: [...this.state.extras, event.target.value] });
    } else {
      var index = this.state.extras.indexOf(event.target.value);
      this.setState(this.state.extras.splice(index, 1));
    }
  }

  handleDressingChange(event) {
    this.setState({ dressing: event.target.value });
  }

  render() {
    const inventory = this.props.inventory;
    if (!inventory) {
      alert("inventory is undefined in ComposeSalad");
    }
    let foundations = Object.keys(inventory).filter(
      name => inventory[name].foundation
    );
    let proteins = Object.keys(inventory).filter(
      name => inventory[name].protein
    );
    let extras = Object.keys(inventory).filter(name => inventory[name].extra);
    let dressings = Object.keys(inventory).filter(
      name => inventory[name].dressing
    );

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>
              <h4>Välj bas</h4>
            </legend>
            <ul>
              <select
                name="foundation"
                value={this.state.foundation}
                onChange={this.handleFoundationChange}
              >
                <option value="">(None)</option>
                {foundations.map(name => (
                  <option value={name}>{name}</option>
                ))}
              </select>
            </ul>
          </fieldset>

          <fieldset>
            <legend>
              <h4>Välj protein</h4>
            </legend>
            <ul>
              {proteins.map(name => (
                <div>
                  <input
                    type="checkbox"
                    name="protein"
                    value={name}
                    checked={this.state.proteins.includes(name) || false}
                    onChange={this.handleProteinChange}
                  />
                  <label key={name}>{name}</label>
                </div>
              ))}
            </ul>
          </fieldset>

          <fieldset>
            <legend>
              <h4>Välj tillbehör</h4>
            </legend>
            <ul>
              {extras.map(name => (
                <div>
                  <input
                    type="checkbox"
                    name="extra"
                    value={name}
                    checked={this.state.extras.includes(name) || false}
                    onChange={this.handleExtraChange}
                  />
                  <label key={name}>{name}</label>
                </div>
              ))}
            </ul>
          </fieldset>

          <fieldset>
            <legend>
              <h4>Välj dressing</h4>
            </legend>
            <ul>
              <select
                name="dressing"
                value={this.state.dressing}
                onChange={this.handleDressingChange}
              >
                <option value="">(None)</option>
                {dressings.map(name => (
                  <option value={name}>{name}</option>
                ))}
              </select>
            </ul>
          </fieldset>

          <ul>
            <input type="submit" value="Submit" />
          </ul>
        </form>
      </div>
    );
  }
}

export default ComposeSalad;
