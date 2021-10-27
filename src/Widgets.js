import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    }

    return <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('COVID-19', "India recorded 15000 cases in a day")}
        {newsArticle('WFH', "Employees back to office in November")}
        {newsArticle('Fresher Hiring', "Hiring percentage surges upto 40%")}
        {newsArticle('Data Science', "Data science is most sexiest job of 20th century")}
    </div>
};

export default Widgets;