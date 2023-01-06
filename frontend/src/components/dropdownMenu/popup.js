import React from 'react';
import './popup.css';

class Popup extends React.Component {
  state = { show: false };

  showPopup = () => {
    this.setState({ show: true });

    setTimeout(() => {
        this.setState({ show: false });
    }, 2000);
  }

  hidePopup = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.showPopup}>Show Popup</button>
        {this.state.show && (
          <div className='popup'>
            <div className='popup-inner'>
              <h1>Saved</h1>
              <p>This pin is saved to</p>
              <button onClick={this.hidePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;