import { useState } from 'react'
import Button from './Button';

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);

    if (isExpanded) {
      return <p>{children} <Button onClick={() => setisExpanded(false)}>Show Less</Button></p>
  } 
    return <p>{children.substring(0, maxChars)}... <Button onClick={() => setisExpanded(true)}>Show More</Button></p>
}

export default ExpandableText