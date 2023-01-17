import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";

const LoginForm = (props) => {

    const{onSubmit, onChange, user} = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value);
      }

    return (
        <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
            <Input
                name="email"
                id="email"
                value={user.email}
                placeholder={"Email Address"}
                onChange={handleChange}
                type="email"
                required
            />
            </InlineInputContainer>
            <InlineInputContainer>
            <Input
                name="password"
                id="password"
                value={user.password}
                placeholder={"Password"}
                onChange={handleChange}
                type="password"
                required
            />
            </InlineInputContainer>
            <Button>Submit</Button>
        </Form>
        </Container>
    )
}

export default LoginForm;