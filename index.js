const start = callback => {
  new WebSocket("ws://localhost:9000/ws").addEventListener("message", event =>
    callback(JSON.parse(event.data))
  );
};

const handle = message => {
  console.log(message);
  const table = document.querySelector("table#table");
  const tr = table.insertRow(1);
  tr.insertCell(0).innerText = message.dev_id;
  tr.insertCell(1).innerText = message.ds_id;
  tr.insertCell(2).innerText = new Date(message.at).toLocaleString();
  tr.insertCell(3).innerText = message.value;
};

start(handle);
