import DashboardOuter from './components/DashboardOuter';
import DashboardInner from './components/DashboardInner';
import Content from './components/Content';
import './styles/app.scss';

function App() {
  return (
    <div className="app--flex">
      <DashboardOuter />
      <div className="app--column">
        <DashboardInner />
        <Content />
      </div>
    </div>
  );
}

export default App;
