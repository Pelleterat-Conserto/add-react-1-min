const TrapButton = props => React.createElement(
    'button',
    { ...props, onClick: () => window.open('https://youtu.be/dQw4w9WgXcQ'), },
    'Don\'t click me'
  );


const domContainer = document.querySelector('#some-plugin');

ReactDOM.render(
  React.createElement(TrapButton, {
    style: {
      width: '30%',
      margin: '3rem auto',
      fontSize: '2rem',
  }}),
  domContainer
);