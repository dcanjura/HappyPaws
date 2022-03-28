import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsFillPencilFill,
  BsTrashFill,
  BsFillFilePlusFill,
} from "react-icons/bs";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dui, setDui] = useState("");
  const [email, setEmail] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [typeAction, setTypeAction] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };

    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/api/users");
    const data = await res.json();

    return data;
  };

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:8080/api/users/${id}`);
    const data = res.json();

    return data;
  };

  const addUser = async (user) => {
    console.log("User: ", user);
    const res = await fetch("http://localhost:8080/api/saveUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers(...users, data);
  };

  const updateUser = async (user) => {
    const id = user.userId;
    console.log("Updated user: ", user);
    const userToUpd = await fetchUser(user.userId);
    const res = await fetch(`http://localhost:8080/api/updateUser/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userToUpd),
    });

    const data = await res.json();

    await setUsers(users.map((user) => (user.id === id ? { data } : user)));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addUser({ name, dui, userName, password, email, typeUser });

    setName("");
    setUserName("");
    setPassword("");
    setDui("");
    setEmail("");
    setTypeUser("");
  };

  const onUpdate = (e) => {
    e.preventDefault();

    updateUser({ userId, name, dui, userName, password, email, typeUser });

    setUserId(null);
    setName("");
    setUserName("");
    setPassword("");
    setDui("");
    setEmail("");
    setTypeUser("");
  };

  const onDelete = async () => {};

  const handleModalShow = () => setAddModalShow(true);

  const handleModalClose = () => setAddModalShow(false);

  const handleDeleteModalShow = () => setDeleteModalShow(true);

  const handleDeleteModalClose = () => setDeleteModalShow(false);

  return (
    <Container>
      <Row>
        <Col sm={4} md={9}>
          <h1>Manejo de usuarios</h1>
        </Col>
        <Col sm={8} md={3}>
          <Button
            variant="success"
            onClick={() => {
              handleModalShow();
              setTypeAction("Create");
            }}
          >
            {" "}
            Agregar nuevo usuario <BsFillFilePlusFill />{" "}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Table responsive striped hover size="sm" className="mt-5">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>User type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.typeUser}</td>
                    <td>
                      <Container>
                        <Row className="justify-content-center-md-center">
                          <Col md="auto">
                            <Button
                              variant="warning"
                              onClick={() => {
                                handleModalShow();
                                setTypeAction("Update");
                                setUserId(user.id);
                                setName(user.name);
                                setUserName(user.userName);
                                setEmail(user.email);
                                setTypeUser(user.typeUser);
                                setPassword(user.password);
                                console.log("User: ", user);
                              }}
                            >
                              {" "}
                              <BsFillPencilFill />{" "}
                            </Button>
                          </Col>
                          <Col md="auto">
                            <Button
                              variant="danger"
                              onClick={handleDeleteModalShow}
                            >
                              <BsTrashFill />
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={addModalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {typeAction === "Create"
              ? "Crear nuevo usuario"
              : "Actualizar usuario"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={typeAction === "Create" ? onSubmit : onUpdate}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1° nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de usuario"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDui">
                <Form.Label>DUI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="N° de DUI"
                  value={dui}
                  onChange={(e) => setDui(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridEmail" className="mg-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Row className="my-3">
              <Form.Group as={Col} controlId="formGridTypeUser">
                <Form.Label>Tipo de usuario</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Escoja..."
                  value={typeUser}
                  onChange={(e) => setTypeUser(e.target.value)}
                >
                  <option disabled>Escoja...</option>
                  <option>Admin</option>
                  <option>Organizacion</option>
                  <option>Particular</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={deleteModalShow} onHide={handleDeleteModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Borrar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que quiere eliminar este usuari?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Users;
