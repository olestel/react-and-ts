import React from 'react';
import Card from './card/Card';
import './CardList.css';

interface Story {
  objectID: string;
  title: string;
  author: string;
  created_at: string;
}

interface CardListProps {
  stories: Story[];
}

const CardList: React.FC<CardListProps> = ({ stories }) => (
  <div className="card-list">
    {stories.map(story => (
      <Card key={story.objectID} title={story.title} author={story.author} createdAt={story.created_at} />
    ))}
  </div>
);

export default CardList;
