import { useRef } from "react";

function FormsUncontrolled() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const objData = Object.fromEntries(data);
    
    console.log(objData);
    // Object.entries(objData).map((entry) => {
    //   const [, value] = entry;
    //   console.log(value);
    // });
  };

  return (
    <div>
      <h2>FormsUncontrolled</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          name="todo-name"
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese Todo"
        />
        <textarea
          name="todo-description"
          className="form-control mb-2"
          placeholder="Ingrese Description"
        />
        <select name="todo-state" className="form-control mb-2">
          <option value="pendiente">Pendientes</option>
          <option value="completada">Completadas</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
}

export default FormsUncontrolled;
