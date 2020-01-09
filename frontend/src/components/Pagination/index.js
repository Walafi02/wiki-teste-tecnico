import React from 'react';
import Pagination from 'react-paginating';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFastForward,
  MdFastRewind,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import { requestPosts } from '~/store/modules/posts/actions';

export default function App() {
  const tPages = useSelector(state => state.posts.totalPages);
  const cPage = useSelector(state => state.posts.currentPage);
  const loading = useSelector(state => state.posts.loading);
  const type_post_id = useSelector(state => state.posts.type_post_id);
  const dispatch = useDispatch();

  function handlePageChange(page = 1) {
    dispatch(requestPosts(page, type_post_id));
  }

  return (
    <>
      <Container>
        {tPages > 1 && (
          <Pagination
            total={tPages}
            limit={1}
            pageCount={3}
            currentPage={cPage}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps,
            }) => (
              <div>
                <button
                  type="button"
                  disabled={!hasPreviousPage || loading}
                  title="Primeiro"
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: handlePageChange,
                  })}
                >
                  <MdFastRewind />
                </button>

                <button
                  type="button"
                  disabled={!hasPreviousPage || loading}
                  title="Anterior"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange,
                  })}
                >
                  <MdKeyboardArrowLeft />
                </button>

                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = {
                      backgroundColor: '#5856d6',
                    };
                  }
                  return (
                    <button
                      type="button"
                      key={page}
                      style={activePage}
                      className={currentPage === page ? 'active' : ''}
                      disabled={loading}
                      {...getPageItemProps({
                        pageValue: page,
                        onPageChange: handlePageChange,
                      })}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  type="button"
                  disabled={!hasNextPage || loading}
                  title="Próximo"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange,
                  })}
                >
                  <MdKeyboardArrowRight />
                </button>

                <button
                  type="button"
                  disabled={!hasNextPage || loading}
                  title="Ultimo"
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: handlePageChange,
                  })}
                >
                  <MdFastForward />
                </button>
              </div>
            )}
          </Pagination>
        )}
      </Container>
    </>
  );
}

App.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
};
