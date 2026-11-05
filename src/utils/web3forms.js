const WEB3FORMS_ACCESS_KEY = '32670955-8aeb-4ca1-a2d0-556275e2f699';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function submitWeb3Form(formData) {
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Unable to submit the form right now.');
  }

  return data;
}
