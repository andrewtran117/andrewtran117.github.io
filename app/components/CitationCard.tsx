import React from "react";

interface CitationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
  highlightName?: string; // e.g., "Andrew Tran"
}

const CitationCard: React.FC<CitationCardProps> = ({ title, authors, venue, year, link, highlightName }) => {
  // Bold the specified name in the author list
  const renderAuthors = () => {
    if (!highlightName) return authors;
    return authors.split(", ").map((author, index) => {
      const isMe = author.trim() === highlightName;
      return (
        <span key={index}>
          {isMe ? <strong>{author}</strong> : author}
          {index < authors.split(", ").length - 1 ? ", " : ""}
        </span>
      );
    });
  };

  return (
    <div className="mb-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold underline text-[#d97706]">
        {title}
      </a>
      <div className="text-sm text-[#5A3318]">
        {renderAuthors()}. <span className="italic">{venue}</span>, {year}.
      </div>
    </div>
  );
};

export default CitationCard;
