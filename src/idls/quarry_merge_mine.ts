export type QuarryMergeMineIDL =
{
  "version": "1.10.0",
  "name": "quarry_merge_mine",
  "instructions": [
    {
      "name": "newPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "primaryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "mintBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMergeMiner",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMiner",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "miner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minerVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stakePrimaryMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mmPrimaryTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "stakeReplicaMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "replicaMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "unstakePrimaryMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mmPrimaryTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakeAllReplicaMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "replicaMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "withdrawTokens",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mmTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintWrapperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimFeeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "MergePool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "primaryMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "replicaMint",
            "type": "publicKey"
          },
          {
            "name": "mmCount",
            "type": "u64"
          },
          {
            "name": "totalPrimaryBalance",
            "type": "u64"
          },
          {
            "name": "totalReplicaBalance",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "MergeMiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "primaryBalance",
            "type": "u64"
          },
          {
            "name": "replicaBalance",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewMergePoolEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "primaryMint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InitMergeMinerEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "primaryMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InitMinerEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "StakePrimaryEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "StakeReplicaEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UnstakePrimaryEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UnstakeReplicaEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawTokensEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "endBalance",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    },
    {
      "code": 301,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance."
    },
    {
      "code": 302,
      "name": "InvalidMiner",
      "msg": "Invalid miner for the given quarry."
    },
    {
      "code": 303,
      "name": "CannotWithdrawReplicaMint",
      "msg": "Cannot withdraw a replica mint."
    },
    {
      "code": 304,
      "name": "OutstandingReplicaTokens",
      "msg": "User must first withdraw from all replica quarries."
    }
  ]
}
;
export const QuarryMergeMineJSON: QuarryMergeMineIDL =
{
  "version": "1.10.0",
  "name": "quarry_merge_mine",
  "instructions": [
    {
      "name": "newPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "primaryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "mintBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMergeMiner",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initMiner",
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "miner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minerVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stakePrimaryMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mmPrimaryTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "stakeReplicaMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "replicaMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "unstakePrimaryMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mmPrimaryTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakeAllReplicaMiner",
      "accounts": [
        {
          "name": "mmOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "replicaMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "replicaMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "withdrawTokens",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mmTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimRewards",
      "accounts": [
        {
          "name": "mintWrapper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintWrapperProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardsTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimFeeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stake",
          "accounts": [
            {
              "name": "pool",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "mm",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "rewarder",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "quarry",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "miner",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "minerVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "mineProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "unusedAccount",
              "isMut": true,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "MergePool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "primaryMint",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "replicaMint",
            "type": "publicKey"
          },
          {
            "name": "mmCount",
            "type": "u64"
          },
          {
            "name": "totalPrimaryBalance",
            "type": "u64"
          },
          {
            "name": "totalReplicaBalance",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "MergeMiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "primaryBalance",
            "type": "u64"
          },
          {
            "name": "replicaBalance",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "NewMergePoolEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "primaryMint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InitMergeMinerEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "primaryMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "InitMinerEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "StakePrimaryEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "StakeReplicaEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UnstakePrimaryEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UnstakeReplicaEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "miner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawTokensEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimEvent",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mm",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "initialBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "endBalance",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    },
    {
      "code": 301,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance."
    },
    {
      "code": 302,
      "name": "InvalidMiner",
      "msg": "Invalid miner for the given quarry."
    },
    {
      "code": 303,
      "name": "CannotWithdrawReplicaMint",
      "msg": "Cannot withdraw a replica mint."
    },
    {
      "code": 304,
      "name": "OutstandingReplicaTokens",
      "msg": "User must first withdraw from all replica quarries."
    }
  ]
}
;
import { generateErrorMap } from '@saberhq/anchor-contrib';
export const QuarryMergeMineErrors = generateErrorMap(QuarryMergeMineJSON);
