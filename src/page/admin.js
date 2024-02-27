import { apiPost } from '../service/api-axios.js';

const Admin = () => {
  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    await apiPost(formJson);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input name='name' />
      </label>
      <hr />
      <label>
        Type: <input name='type' />
      </label>
      <hr />
      <label>
        Detail: <input name='detail' />
      </label>
      <hr />
      <button type='submit'>Submit form</button>
    </form>
  );
};

export default Admin;
