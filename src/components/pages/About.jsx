import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-indigo-800 to-blue-600 text-black">
      <div className="container mx-auto my-8 px-4">
        <div className="bg-white rounded-md p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Task App</h1>

          <h2 className="text-2xl font-bold mb-2">Problem Statement:</h2>
          <p className="mb-4">
            The Task App addresses the challenge of efficient task management,
            progress tracking, and providing users with a seamless experience in
            organizing their daily activities.
          </p>

          <h2 className="text-2xl font-bold mb-2">Approach:</h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>User Interface Design:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Implemented a clean and intuitive interface for easy
                  navigation, with the bulk of the design crafted using Tailwind CSS&apos;s utility-first approach.
                </li>
                <li>
                  Leveraged{' '}
                  <a
                    href="https://material-ui.com/"
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material-UI
                  </a>{' '}
                  components to maintain a consistent and visually appealing
                  design.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>State Management:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Utilized the{' '}
                  <a
                    href="https://reactjs.org/docs/context.html"
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Context API
                  </a>{' '}
                  for effective state management.
                </li>
                <li>
                  Ensured a centralized state for streamlined data handling
                  across components.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>React Hooks:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Employed React hooks such as `useState` and `useEffect` for
                  managing component-level state and side effects.
                </li>
                <li>
                  Leveraged the benefits of hooks to write more concise and
                  readable functional components.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Local Storage:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Integrated local storage to persist data between page reloads.
                </li>
                <li>
                  Utilized the `localStorage` API to store and retrieve data,
                  providing a seamless user experience.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>React Router-Dom:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Implemented navigation and routing using{' '}
                  <a
                    href="https://reactrouter.com/web/guides/quick-start"
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    react-router-dom
                  </a>
                  .
                </li>
                <li>Utilized `BrowserRouter` to enable client-side routing.</li>
                <li>
                  Configured `Link` and `Route` components for navigation
                  between different pages.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mb-2">
            Technologies and Libraries Used:
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <strong>
                <a
                  href="https://vitejs.dev/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite
                </a>
                :
              </strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Utilized Vite for a fast and efficient development
                  environment.
                </li>
                <li>
                  Took advantage of Vite&apos;s built-in features like hot
                  module replacement for a smoother development experience.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>
                <a
                  href="https://reactjs.org/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                :
              </strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Chosen for its declarative nature and component-based
                  architecture.
                </li>
                <li>
                  Leveraged React hooks for managing state and lifecycle events.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>
                <a
                  href="https://material-ui.com/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Material-UI
                </a>
                :
              </strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Incorporated Material-UI components selectively to enhance
                  specific parts of the UI.
                </li>
                <li>
                  Customized Material-UI styles to seamlessly integrate with the
                  overall design using Tailwind CSS principles.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>
                <a
                  href="https://tailwindcss.com/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                :
              </strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Styled the majority of components using Tailwind CSS,
                  leveraging its utility-first approach.
                </li>
                <li>
                  Utilized Tailwind CSS for efficient styling and responsive
                  design.
                </li>
                <li>
                  Capitalized on utility classes for rapid development and
                  consistent design.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>React Context API:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Implemented for state management, ensuring a predictable flow
                  of data.
                </li>
                <li>
                  Facilitated communication between components without prop
                  drilling.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
