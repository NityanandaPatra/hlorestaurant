import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div color="ff0"style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant" style={{ color: "var(--color-golden" }}>{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
