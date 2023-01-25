import React from 'react'
import Form from "../common/Form";
import Button from '../common/Button';
import Container from '../common/Container';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

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
                name="location"
                id="location"
                value={job.location}
                placeholder={"Location"}
                onChange={handleChange}
                type="text"
                required
            />
            </InlineInputContainer>
            <InlineInputContainer>
            <TextArea
                name="content"
                id="content"
                value={job.content}
                placeholder={"Description"}
                onChange={handleChange}
                required
            />
            </InlineInputContainer>
            <Button>Submit</Button>
        </Form>
        </Container>
    )
}

export default NewJobPostForm