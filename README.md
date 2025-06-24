# Periodic Elements Table

This project is an Angular application that displays a table of periodic elements. It demonstrates key Angular concepts, including:

- **Angular Material:** For a clean and responsive user interface.
- **RxJS:** Used for reactive programming, specifically for debounced filtering.
- **SignalStore (@ngrx/signals):** For efficient and reactive state management.
- **Data Simulation:** Simulates an asynchronous data fetch at application startup.
- **Live Filtering:** Allows users to filter table data across all fields with a 2-second debounce time.
- **Inline Editing:** Provides the ability to edit any element's properties directly from the table via a dialog.

---

## Features

- Display of periodic elements (Number, Name, Weight, Symbol).
- Simulated data fetching on application load.
- **Debounced Filtering:** Filter elements dynamically across all columns with a 2-second delay after typing.
- **Edit Functionality:** Update element details through a Material Design dialog.
- Responsive design using Angular Material components.

---

## How to Run the Application

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have Node.js and Angular CLI installed.

- **Node.js:** [Download and Install Node.js](https://nodejs.org/en/download/) (which includes npm).
- **Angular CLI:** Install globally using npm:

  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. **Clone the repository** (if applicable, otherwise assume you have the project files):

    ```bash
    git clone https://github.com/Matik541/angular-elements-table
    cd angular-elements-table
    ```

2. **Install project dependencies:**
    Navigate to the project directory and run:

    ```bash
    npm install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
ng serve --open
```

This command will:

- Compile the application.
- Start a local development server.
- Open the application automatically in your default web browser at `http://localhost:4200/`.

The application will automatically reload if you change any of the source files.
