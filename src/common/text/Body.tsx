import React from 'react';

interface IBodyProps {
    children: React.ReactChild;
}

export const Body = ({ children }: IBodyProps) => (
    <p>{children}</p>
)