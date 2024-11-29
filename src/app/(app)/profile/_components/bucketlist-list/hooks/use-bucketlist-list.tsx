'use client';
import { useState } from 'react';

import { BucketListItem } from '@/models/src';

interface useBucketlistListReturn {
  selectedList: BucketListItem | undefined;
  handleClick: (list: BucketListItem) => void;
  handleCloseClick: () => void;
}

export const useBucketlistList = (): useBucketlistListReturn => {
  const [selectedList, setSelectedList] = useState<BucketListItem>();

  const handleClick = (list: BucketListItem) => {
    setSelectedList(list);
  };

  const handleCloseClick = () => {
    setSelectedList(undefined);
  };

  return {
    selectedList,
    handleClick,
    handleCloseClick,
  };
};
