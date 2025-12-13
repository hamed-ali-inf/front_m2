import './Container.css'
export function Container(props) {
  return <div className="container">
    <h1>{props.title}</h1>
    {props.children}
    </div>;
}
