import readline from "readline";

const TODO = [];
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newLine = () => {
  console.log("\n");
};
const addTodo = () => {
  newLine();
  readLine.question("Enter a new todo: ", (todo) => {
    TODO.push(todo);
    console.log(`Added todo: "${todo}"`);
    newLine();
    showMainMenu();
  });
};

const viewTodos = () => {
  console.log("Your Todos:");
  TODO.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
  newLine();
  showMainMenu();
};

const editTodo = () => {
  readLine.question("Enter the todo number to edit: ", (num) => {
    const index = parseInt(num) - 1;
    readLine.question("Enter the new todo text: ", (newTodo) => {
      if (index >= 0 && index < TODO.length) {
        TODO[index] = newTodo;
        console.log(`Todo ${index + 1} updated to: "${newTodo}"`);
      } else {
        console.log("Invalid todo index.");
      }
      newLine();
      showMainMenu();
    });
  });
};

const deleteTodo = () => {
  readLine.question("Enter the todo number to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < TODO.length) {
      const removed = TODO.splice(index, 1);
      console.log(`Deleted todo: "${removed[0]}"`);
    } else {
      console.log("Invalid todo index.");
    }
    newLine();
    showMainMenu();
  });
};

const showMainMenu = () => {
  console.log("1. Add Todo");
  console.log("2. View Todos");
  console.log("3. Edit Todo");
  console.log("4. Delete Todo");
  console.log("5. Exit");
  newLine();

  readLine.question("Select an option: ", (option) => {
    switch (option) {
      case "1":
        addTodo();
        break;
      case "2":
        viewTodos();

        break;
      case "3":
        editTodo();

        break;
      case "4":
        deleteTodo();
        break;
      case "5":
        console.log("Exiting...");
        readLine.close();

        break;
      default:
        newLine();
        console.log("Invalid option, try again.");
        showMainMenu();
    }
  });
};

showMainMenu();
