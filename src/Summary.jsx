import React from 'react';
import PropTypes from 'prop-types';
import "./summary.css";

// { var1, var2 } er der samme som f.eks. "for a,b in x" i python - automatisk
// utpakking av variabler. I dette tilfellet er det "props" som egentlig kommer inn
const Summary = ({todosCount, completedTodosCount }) => (
    <div className="summary__container">
        <p className="summary__text">
            {`${completedTodosCount}/${todosCount} tasks completed`}
        </p>
    </div>
);

Summary.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedTodosCount: PropTypes.number.isRequired
};

export default Summary;
