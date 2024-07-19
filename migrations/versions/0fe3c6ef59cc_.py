"""empty message

Revision ID: 0fe3c6ef59cc
Revises: 7edafbc2473c
Create Date: 2024-07-19 19:16:19.502429

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0fe3c6ef59cc'
down_revision = '7edafbc2473c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('pais', sa.String(length=120), nullable=False))
        batch_op.drop_constraint('user_lastname_key', type_='unique')
        batch_op.drop_constraint('user_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_unique_constraint('user_name_key', ['name'])
        batch_op.create_unique_constraint('user_lastname_key', ['lastname'])
        batch_op.drop_column('pais')

    # ### end Alembic commands ###
