import Card from '@/components/Card';
import React from 'react';

const data = [
  { id: '1', title: 'title 1', description: 'description 1' },
  { id: '2', title: 'title 2', description: 'description 2' },
  { id: '3', title: 'title 3', description: 'description 3' },
];

export default function Index() {
  return (
    <>
      <h1>Title</h1>
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </>
  );
}
