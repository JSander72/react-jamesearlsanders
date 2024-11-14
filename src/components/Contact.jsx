import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div style={styles.container}>
            <h1>Contact Me</h1>
            <form style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input type="text" name="name" style={styles.input} />
                </label>
                <label style={styles.label}>
                    Email:
                    <input type="email" name="email" style={styles.input} />
                </label>
                <label style={styles.label}>
                    Message:
                    <textarea name="message" style={styles.textarea}></textarea>
                </label>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '10px',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Contact;