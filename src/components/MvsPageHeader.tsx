import React from 'react';
import { Box, Typography } from '@mui/material';
import { mvsPageDescriptionSx, mvsPageTitleSx } from '../theme/mvsLayout';

export type MvsPageHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  mb?: number;
  hideIcon?: boolean;
  icon?: React.ReactNode;
  iconPath?: string;
  backTo?: string;
  onBack?: () => void;
};

const MvsPageHeader: React.FC<MvsPageHeaderProps> = ({
  title,
  description,
  actions,
  mb = 3,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 2,
      mb,
      width: '100%',
      flexShrink: 0,
    }}
  >
    <Box sx={{ minWidth: 0 }}>
      <Typography
        component="h1"
        sx={{
          ...mvsPageTitleSx,
          mb: description ? 0.75 : 0,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      {description ? <Typography sx={{ ...mvsPageDescriptionSx, maxWidth: 880 }}>{description}</Typography> : null}
    </Box>
    {actions ? (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          alignItems: 'center',
          width: '100%',
          minWidth: 0,
        }}
      >
        {actions}
      </Box>
    ) : null}
  </Box>
);

export default MvsPageHeader;
