const myHeaders = new Headers();
myHeaders.append("X-MailerLite-ApiKey", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTU3ZmE2OTM2MGM5OGI5MjE5NzczYzQ2ZjQ3ZjVlMTI2YmFkZGYwMzcwMzgxOWQ5YTdiZWNjNzgxZTU2YjE5ZjRhZGY5ZTBlZDg1MmRlMTUiLCJpYXQiOjE3MzYxNDY1NDQuNTE0NTc0LCJuYmYiOjE3MzYxNDY1NDQuNTE0NTc2LCJleHAiOjQ4OTE4MjAxNDQuNTA1NDY5LCJzdWIiOiIxMjczMjcyIiwic2NvcGVzIjpbXX0.vHfjDMx7FgqftYWfhbE6Z2gmsbBq2h6ojiTUXSLumJ1uf0rzUpDh9J5g8Kt4z0xRWINqpA7sBGBOF95sl1m22nfRORPoPGk3lxWx_xZ66rh38L-Qz3c4Og3YES4W47iwqf6m4QV2DVv2x9CgpAB_W0yKkTAFQNyBawsaZiQfQJkNfuo4kcDOrfJRPwb93CNotZVJmElsq939v8sLPQ_8edHRKoPV2Qh0flz88-uNE9iROF-2LxOPIaXdG4onC3ItpRMw6wIeVA3IQav1Lp9NEse412qFZau2eup0WssG4_d9GDAfONw3Judzo168_yd_VlwpTBZZ-SuAUGOaXd-tZ8IDGjT_X4_1Nd2zvvdTMa49iRamJRZh7BeWjyXz5f8KmUdza4RXzafSCUpYyJvr6268AahXYEHKpGc1oN2pSnuiT0-8bFKZJsCj4H9JZzwCDl7TtPTkkKdt-lXx7PKwVQMkI84eOfixZ28u3iLi4ywXgHB2E8YhnVRhp7q3YgliYvOwYiZt4LZYJig1ev9XhBEu0BkzvP7_IWJbBbcrWgOtypFASAOVyeJmvEXB5coqkIEMwuodNZjNAIvkymNAQRrkbPR74Iy7K0aFdU261sS8SNMuq8i3GDHFlE46-Idb119ejIwyqQrZK_kVkaLbsLxLX2nOawflZmuT3mNI-54");
myHeaders.append("Cookie", "PHPSESSID=8e98e66e7f861389f978d7ea0a653dbc");

const formdata = new FormData();
formdata.append("email", "dfdfdf@gmail.com");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("https://api.mailerlite.com/api/v2/subscribers", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));