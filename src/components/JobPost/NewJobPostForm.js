import React from 'react'
import Form from "../common/Form";
import Button from '../common/Button';
import Container from '../common/Container';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';

const NewJobPostForm = (props) => {
    const{onSubmit, onChange, job} = props;

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
      }

    return (
        <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
            <Input
                name="title"
                id="title"
                value={job.title}
                placeholder={"Title"}
                onChange={handleChange}
                type="text"
                required
            />
            </InlineInputContainer>
            <InlineInputContainer>
            <Input
                name="content"
                id="content"
                value={job.content}
                placeholder={"Description"}
                onChange={handleChange}
                type="text"
                required
            />
            </InlineInputContainer>
            <Button>Submit</Button>
        </Form>
        </Container>
    )
}

export default NewJobPostForm